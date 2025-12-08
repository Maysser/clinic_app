import axios from 'axios';

const BASE_URL: string = process.env.APP_URL || 'http://localhost:80'; // Nginx default port

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

async function waitForServer(retries: number = 30, interval: number = 1000): Promise<boolean> {
  for (let i = 1; i <= retries; i++) {
    try {
      await axios.get(`${BASE_URL}/health`, { timeout: 2000 });
      console.log('\x1b[32m%s\x1b[0m', '✅ Server is ready');
      return true;
    } catch (error) {
      process.stdout.write(`\r⏳ Waiting for server... Attempt ${i}/${retries}`);
      await sleep(interval);
    }
  }
  console.log('\n\x1b[31m%s\x1b[0m', '❌ Server did not respond in time');
  throw new Error('Server timeout');
}

async function runTests(): Promise<void> {
  console.log('\n🔥 Running Smoke Tests\n');

  let passed = 0;
  let failed = 0;

  await waitForServer();

  // Test 1: Health endpoint
  process.stdout.write('Test 1: Health Check... ');
  try {
    const res = await axios.get(`${BASE_URL}/health`);
    if (res.status === 200 && res.data.trim() === 'OK') {
      console.log('\x1b[32m%s\x1b[0m', 'PASSED');
      passed++;
    } else {
      throw new Error('Health response invalid');
    }
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'FAILED');
    failed++;
  }

  // Test 2: Homepage loads
  process.stdout.write('Test 2: Homepage... ');
  try {
    const res = await axios.get(BASE_URL);
    if (res.status === 200 && res.data.includes('<html')) {
      console.log('\x1b[32m%s\x1b[0m', 'PASSED');
      passed++;
    } else {
      throw new Error('Homepage invalid');
    }
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'FAILED');
    failed++;
  }

  console.log(`\n📊 Results: ${passed} passed, ${failed} failed\n`);
  process.exit(failed > 0 ? 1 : 0);
}

runTests();
