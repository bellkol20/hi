export function getGreeting(name: string = 'TypeScript'): string {
  return `Hello from ${name}!`;
}

if (require.main === module) {
  // Runtime entry point
   
  console.log(getGreeting());
}
