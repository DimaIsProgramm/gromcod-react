import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setOnline] = useState('online');

  useEffect(() => {
    function handleOnline() {
      setOnline(true);
    }
    function handleOffline() {
      setOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isOnline]);

  return isOnline ? (
    <div className="status">Online</div>
  ) : (
    <div className="status status_offline">Offline</div>
  );
};

export default ConnectionStatus;

// algo
// 1. useState hook isOnine: null
// 2. useEffect hook addEvent onlnine removeEvents online
// 3. useEffect hook addEvent offline removeEvnt offline
