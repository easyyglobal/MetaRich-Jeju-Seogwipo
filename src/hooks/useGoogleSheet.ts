import { useState } from 'react';

export function useGoogleSheet() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (data: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Use environment variable for Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      
      if (!GOOGLE_SCRIPT_URL) {
        console.warn('VITE_GOOGLE_SCRIPT_URL is not set. Simulating submission.');
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSuccess(true);
        return;
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires no-cors for simple POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      });

      // Since mode is 'no-cors', we can't check response.ok
      // But usually if it doesn't throw, it's sent
      setSuccess(true);
    } catch (err) {
      setError('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading, error, success };
}
