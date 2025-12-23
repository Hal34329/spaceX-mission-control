export const formatDate = (dateString: string, isUpcoming: boolean | null) => {
        const date = new Date(dateString);

        const options: Intl.DateTimeFormatOptions = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };

        if(isUpcoming) {
            options.hour = '2-digit';
            options.minute = '2-digit';
        }

        return date.toLocaleDateString('en-GB', options)
    }