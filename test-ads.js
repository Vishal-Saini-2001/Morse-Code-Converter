// Test script to verify ads.txt accessibility
const testAdsText = async () => {
  try {
    const response = await fetch('http://localhost:4173/ads.txt');
    
    console.log('Status:', response.status);
    console.log('Content-Type:', response.headers.get('Content-Type'));
    
    if (response.ok) {
      const content = await response.text();
      console.log('Content:', content);
      console.log('✅ ads.txt is accessible!');
    } else {
      console.log('❌ ads.txt is not accessible');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

testAdsText();
