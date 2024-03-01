import './content-input.css'

function ContentInput() {
  return (
    <section id="urlbox">
        <h1>Paste the URL to be shortened</h1>
        <div id="formurl">
            <input type="text" placeholder="Enter the link here"/>
            <div id="formbutton">
                <input type="submit" value="Shorten URL"/>
            </div>
        </div>
        <p className="urlbox-text">
            ShortURL is a free tool to shorten URLs and generate short links
            <br/>
            URL shortener allows to create a shortened link making it easy to share
        </p>
    </section>
  )
}

export default ContentInput
