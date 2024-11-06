  // 自定义函数来处理循环引用
 export  const  safeStringify = (obj, seen = new WeakSet()) => {
    if (seen.has(obj)) return '[Circular]';
    seen.add(obj);

    if (typeof obj === 'function' || obj instanceof Date) {
      return String(obj);
    }

    if (Array.isArray(obj)) {
      return `[${obj.map(item => safeStringify(item, seen)).join(', ')}]`;
    }

    if (typeof obj === 'object' && obj !== null) {
      const keys = Object.keys(obj).filter(key => typeof obj[key] !== 'function');
      return `{${keys.map(key => `"${key}": ${safeStringify(obj[key], seen)}`).join(', ')}}`;
    }

    return JSON.stringify(obj);
  };