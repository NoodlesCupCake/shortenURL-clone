import './content-input.css'

function ContentInput() {
  return (
    <section id="urlbox">
        <h1>Paste the URL to be shortened</h1>
        <div id="formurl">
            <form id="form">
                <input id="link" type="text" placeholder="Enter the link here"/>
                <div id="formbutton">
                    <input type="submit" value="Shorten URL"/>
                </div>
                <ul id="parent" className="shortLinks">
                </ul>
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
