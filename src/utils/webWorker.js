// Web Worker for offloading heavy computations from main thread

// Create a worker for heavy tasks
export const createWorker = (workerFunction) => {
  const blob = new Blob([`(${workerFunction.toString()})()`], {
    type: 'application/javascript'
  });
  return new Worker(URL.createObjectURL(blob));
};

// Worker function for image processing
export const imageProcessorWorker = () => {
  self.onmessage = function(e) {
    const { imageData, operations } = e.data;
    
    try {
      let result = imageData;
      
      // Perform operations in worker thread
      operations.forEach(op => {
        switch (op.type) {
          case 'resize':
            result = resizeImage(result, op.width, op.height);
            break;
          case 'compress':
            result = compressImage(result, op.quality);
            break;
          case 'filter':
            result = applyFilter(result, op.filter);
            break;
        }
      });
      
      self.postMessage({ success: true, result });
    } catch (error) {
      self.postMessage({ success: false, error: error.message });
    }
  };
  
  // Helper functions
  function resizeImage(imageData, width, height) {
    // Simple resize logic (placeholder)
    return imageData;
  }
  
  function compressImage(imageData, quality) {
    // Compression logic (placeholder)
    return imageData;
  }
  
  function applyFilter(imageData, filter) {
    // Filter logic (placeholder)
    return imageData;
  }
};

// Worker function for data processing
export const dataProcessorWorker = () => {
  self.onmessage = function(e) {
    const { data, operation } = e.data;
    
    try {
      let result;
      
      switch (operation) {
        case 'sort':
          result = data.sort((a, b) => a.id - b.id);
          break;
        case 'filter':
          result = data.filter(item => item.status === 'active');
          break;
        case 'search':
          const query = e.data.query.toLowerCase();
          result = data.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
          );
          break;
        case 'aggregate':
          result = data.reduce((acc, item) => {
            acc[item.category] = (acc[item.category] || 0) + 1;
            return acc;
          }, {});
          break;
        default:
          throw new Error(`Unknown operation: ${operation}`);
      }
      
      self.postMessage({ success: true, result });
    } catch (error) {
      self.postMessage({ success: false, error: error.message });
    }
  };
};

// Hook for using web workers in React components
export const useWebWorker = (workerFunction, dependencies = []) => {
  const [worker, setWorker] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    if (typeof Worker !== 'undefined') {
      const newWorker = createWorker(workerFunction);
      setWorker(newWorker);
      
      return () => {
        newWorker.terminate();
      };
    }
  }, dependencies);
  
  const executeTask = React.useCallback((data) => {
    return new Promise((resolve, reject) => {
      if (!worker) {
        reject(new Error('Worker not available'));
        return;
      }
      
      setIsLoading(true);
      setError(null);
      
      const handleMessage = (e) => {
        setIsLoading(false);
        worker.removeEventListener('message', handleMessage);
        
        if (e.data.success) {
          resolve(e.data.result);
        } else {
          setError(e.data.error);
          reject(new Error(e.data.error));
        }
      };
      
      worker.addEventListener('message', handleMessage);
      worker.postMessage(data);
    });
  }, [worker]);
  
  return { executeTask, isLoading, error };
};

// Main thread optimization utilities
export const optimizeMainThread = () => {
  // Use requestIdleCallback for non-critical tasks
  const scheduleWork = (callback, options = {}) => {
    if ('requestIdleCallback' in window) {
      return requestIdleCallback(callback, {
        timeout: options.timeout || 5000
      });
    } else {
      return setTimeout(callback, 0);
    }
  };
  
  // Break up long tasks into smaller chunks
  const yieldToMain = () => {
    return new Promise(resolve => {
      scheduleWork(resolve);
    });
  };
  
  // Process arrays in chunks to avoid blocking
  const processArrayInChunks = async (array, processor, chunkSize = 100) => {
    const results = [];
    
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      const chunkResults = chunk.map(processor);
      results.push(...chunkResults);
      
      // Yield to main thread after each chunk
      await yieldToMain();
    }
    
    return results;
  };
  
  return {
    scheduleWork,
    yieldToMain,
    processArrayInChunks
  };
};

export default {
  createWorker,
  imageProcessorWorker,
  dataProcessorWorker,
  useWebWorker,
  optimizeMainThread
};