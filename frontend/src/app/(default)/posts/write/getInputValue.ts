export default function getInputValue( id: string ): string {
  const input = document.getElementById( id ) as HTMLInputElement;
  return input.value;
}