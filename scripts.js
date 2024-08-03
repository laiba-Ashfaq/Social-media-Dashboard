document.addEventListener('DOMContentLoaded', () => {
    const overviewData = {
        impressions: '3400k',
        followers: '1.2k',
        likes: '340k',
        engagements: '1.2k'
    };

    document.querySelectorAll('.listing').forEach((item, index) => {
        switch(index) {
            case 0:
                item.querySelector('h2').textContent = `Impression ${overviewData.impressions}`;
                break;
            case 1:
                item.querySelector('h2').textContent = `Followers ${overviewData.followers}`;
                break;
            case 2:
                item.querySelector('h2').textContent = `Likes ${overviewData.likes}`;
                break;
            case 3:
                item.querySelector('h2').textContent = `Engagements ${overviewData.engagements}`;
                break;
        }
    });
});
