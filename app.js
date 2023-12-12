// Progression 1: create a function and fetch the api using axios

let arr = []
function getData(){
  const getBlog = document.getElementById('blog')
  axios.get('https://gnews.io/api/v4/search?q=example&token=88cfec468646080fc7cee8870b0ab71b&lang=en')
  .then((res)=>{
    const listOfArticles = res.data.articles;
    listOfArticles.forEach((articles)=>{
      const getArticles = document.createElement('div')
      getArticles.setAttribute('id','article')
      getArticles.setAttribute('class','article')

      const title = document.createElement('h3')
      const content = document.createElement('p')
      const img = document.createElement('img')

      title.innerHTML = articles.title;
      content.innerHTML = articles.content;
      img.setAttribute('src',articles.image);

      getArticles.append(title)
      getArticles.append(img)
      getArticles.append(content)

      arr.push(getArticles)
    })
    arr.forEach((datta)=>{
      getBlog.append(datta)
    })
  })
  

}
getData()