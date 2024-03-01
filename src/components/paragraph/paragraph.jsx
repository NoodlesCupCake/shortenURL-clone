
import './paragraph.css'

function Paragraph() {
    return (
        <div id="paragraph" className="paragraph-container">
            <h2 id="">Simple and fast URL shortener!</h2>
            <p>
                ShortURL allows to shorten long links from {' '}
                <a href="https://www.instagram.com/" target="_blank">Instagram</a>{','}
                <a href="https://www.facebook.com/" target="_blank">Facebook</a>{','}
                <a href="https://www.youtube.com/" target="_blank">YouTube</a>{','}
                <a href="https://www.twitter.com/" target="_blank">Twitter</a>{','} 
                <a href="https://www.linkedin.com/" target="_blank">Linked In</a>{','} 
                <a href="https://www.whatsapp.com/" target="_blank">WhatsApp</a>{','} 
                <a href="https://www.tiktok.com/" target="_blank">TikTok</a>{','} 
                blogs and sites. Just paste the long URL and click the Shorten URL button. On the next page{','} 
                copy the shortened URL and share it on sites, chat and emails. After shortening the URL, check{' '} 
                <a href="url-click-counter.php">how many clicks it received</a>.
            </p>
            <h2 id="">Shorten, share and track</h2>
            <p>
            Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. Track statistics for your business and projects by monitoring the number of hits from your URL with our click counter.
            </p>
        </div>
    )
  }
  
  export default Paragraph