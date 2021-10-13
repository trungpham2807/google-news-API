//STEP 1: FETCH DATA
const apiKey ="eb5f1c7930794fc58e0503cf599f921c"
const baseUrl = `https://newsapi.org/v2`
const path = "/top-headlines?"
const country = `country=us`
const query = `&apiKey=${apiKey}`
// const fetchData = () => {
//     const url = baseUrl + path + country + query;
//     const fromFetch = fetch(url);
//     fromFetch
//     .then(response => { 
//        return response.json(); 
//        //JSON.parse: Json -> JS
//     })

//     .then(data => {
//         console.log(data);
  
//         const articles = data.articles;
//         // const totalArticles = data.totalResults;
//         const htmlTitleArea = document.getElementById("titleArea");
//         const htmlOutput = articles.map((singleArticle) => {
//             return renderArticle(singleArticle);
//         });
//         htmlTitleArea.innerHTML = htmlOutput.join("");
//         articles.map((singleArticle) => {
//             document.getElementById(singleArticle.title)
//         });
//         //     //create new li
//         //     const listItem = document.createElement("li")
//         //     //return html inside this element
//         //     listItem.innerHTML = singleArticle.title;
//         //     //add 1 children: listItem node to titleArea
//         //     htmlTitleArea.appendChild(listItem);
//         // })
//         // document.getElementById("titleArea").innerHTML = articles[9].title;
    
//         function renderArticle(title, author, source, content, description, image){
//             return `
//             <li id=${title}>
//             <h1>${singleArticle.title}</h1>
//             <h4>${singleArticle.author}</h4>
//             <h4>${singleArticle.source}</h4>
//             <p>${singleArticle.content}</p>
//             <p>${singleArticle.description}<p>
//             <img src="${singleArticle.urlToImage}>
//             </li>
//             `
//         }
//         renderArticle();
//         //array map => get array which number = number data and return element string
//     })
//     .catch(err => {
//         console.log('Error!!!')
//     })
// }
// fetchData();

//////////
const fetchAsync = async () => {
    const url = baseUrl + path + country + query;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    const articles = data.articles;
    const htmlTitleArea = document.getElementById("titleArea");
    const htmlOutput = articles.map((singleArticle)=> {
        return renderArticle(singleArticle);
    });
    htmlTitleArea.innerHTML = htmlOutput.join('');
    // console.log(htmlOutput)
    articles.map((singleArticle) => {
        document.getElementById(singleArticle.title);
    });
    return;
};
function renderArticle({title, author, source, content, description,publishedAt, urlToImage, url}){
console.log(source);
return `
<li id=${title} class="news-container">
<div class="image-container">
<h1>${title}</h1>
<img src="${urlToImage}">
</div>
<div class ="content-container">
<h4>${author}</h4>
<h4>${source.name}</h4>
<h5>${publishedAt}</h5>
<p>${content}</p>
<p>${description}<p>
</div>
</li>
`;
}
// renderArticle();
fetchAsync();







// [x] As a reader I can see a list of the 20 latest top news stories, loaded dynamically via api.
 // [ ] As a reader I can see a headline, image, writer, source, date, and body of each article.
// [ ] As a reader I can see a list of the 20 latest top news stories, loaded dynamically via api.
// [ ] As a reader I can see the total number of stories currently shown.
// [ ] As a reader I can see all the categories available.
// [ ] As a reader I can see click on a category and see stories in that category.
// [ ] As a reader I can see all the languages available.
// [ ] As a reader I can see click on a language and see stories in that language.
// [ ] As a reader I can click a link at the bottom of the page to load the next 20 stories. The page should not refresh; the stories should add to the bottom of the page.
// [ ] As a reader I can search for articles using a searchbar at the top of the page.
// [ ] As a reader I can see how long ago the story was published in a human-friendly format; e.g. "15 minutes ago". To accomplish this, we recommend you use momentjs. Load it into your page using cdnjs or jsdelivr (these are called CDNs)
// [ ] As a reader, I can easily read articles on the page when viewing from my mobile device.