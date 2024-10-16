
export default function getFormattedDate(dateString: string): string {
    
  return new Intl.DateTimeFormat('GMT', { dateStyle: 'long'} ).format(new Date(dateString))
}
