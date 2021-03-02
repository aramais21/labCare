const goTo = (url, history) => {
    history.push(url,{});
}
const socLinks = [
    {
        socialNetwork: 'facebook',
        link: 'https://www.facebook.com/',
        imageUrl: 'https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png',
        id: 'facebook'
    },
    {
        socialNetwork: 'instagram',
        link: 'https://www.instagram.com/',
        imageUrl: 'https://www.catholiccharitiesdc.org/wp-content/uploads/2018/10/instagram-colourful-icon.png',
        id: 'instagram'
    },
    {
        socialNetwork: 'twitter',
        link: 'https://twitter.com/?lang=en',
        imageUrl: 'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png',
        id: 'twitter'
    }
];
const messages = [
    {
        message: 'wrong',
        status: 200,
        id: `wrong200${new Date().toISOString()}`
    }
]

export const initialState = {goTo, socLinks, messages};