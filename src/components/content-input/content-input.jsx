import './content-input.css'

const handleSubmit = async (e) => {
    e.preventDefault();
    const linkInput = document.getElementById("link");
    const originalLink = linkInput.value;
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${originalLink}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.ok) {
            alert('Here is your shortened link: ' + data);
        } else {
            throw new Error(data.error || 'Unknown error occurred');
        }
    } catch (err) {
        alert('Thanks for even trying!');
    }
};


function ContentInput() {
  return (
    <section id="urlbox">
        <h1>Paste the URL to be shortened</h1>
        <div id="formurl" onSubmit={handleSubmit}>
            <form id="form">
                <input id="link" type="text" placeholder="Enter the link here" required/>
                <div id="formbutton">
                    <input type="submit" value="Shorten URL"/>
                </div>
            </form>
        </div>
        <p className="urlbox-text">
            ShortURL is a free tool to shorten URLs and generate short links
            <br/>
            URL shortener allows to create a shortened link making it easy to share
        </p>
    </section>
  )
}

// const form = document.getElementById("form");
// const linkInput = document.getElementById("link");
// const parent = document.getElementById("parent");

// form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const originalLink = linkInput.value;
//     const apiUrl = `https://api.shrtco.de/v2/shorten?url=${originalLink}`;
  
//     try{
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       console.log(data);
//       let link = document.createElement("li");
//       link.className = "output"
//       link.innerHTML = `<a href="${data.result.full_short_link}" target="_blank">${data.result.full_short_link} </a>`;
//       parent.prepend (link);
  
//     }catch(e){
      
//       console.error(e);
//     }
  
//   });

export default ContentInput
