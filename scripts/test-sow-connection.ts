/**
 * Test Notion SOW Database Connection
 *
 * HOW TO RUN:
 * 1. Make sure NOTION_API_KEY and NOTION_SOW_DATABASE_ID are set in .env.local
 * 2. Run: npm run test:sow:connection
 *
 * This will verify that your Notion integration can access the SOW database.
 */

import { testSowConnection } from '../src/lib/notion-sow';

async function main() {
  console.log('Testing Notion SOW database connection...\n');

  const result = await testSowConnection();

  if (result.success) {
    console.log('SUCCESS! Notion SOW database is reachable.\n');
    console.log('Database Info:');
    console.log('  Title:', result.database?.title || 'N/A');
    console.log('  ID:', result.database?.id || 'N/A');
    console.log('  URL:', result.database?.url || 'N/A');
    console.log('\nYou are ready to create SOW documents!\n');
    process.exit(0);
  } else {
    console.error('FAILED to connect to Notion SOW database.\n');
    console.error('Error:', result.message, '\n');
    console.error('Troubleshooting:');
    console.error('1. Make sure NOTION_API_KEY is set in .env.local');
    console.error('2. Make sure NOTION_SOW_DATABASE_ID is set in .env.local');
    console.error('3. Verify the database is shared with your Notion integration');
    console.error('4. Check that the database ID is correct (copy from Notion URL)\n');
    process.exit(1);
  }
}

main();
