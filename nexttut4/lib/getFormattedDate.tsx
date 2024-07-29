
export default function getFormattedDate(dateString: string): string {
    // console.log(dateString)
    return new Intl.DateTimeFormat('GMT', { dateStyle: 'long'}).format(new Date(dateString))
}