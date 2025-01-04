import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  // Array
  const postList = [];

  // Variabili reattive
  const [postTitle, setPostTitle] = useState('')
  const [post, setPost] = useState(postList)

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: postTitle
    }
    const newPostList = [...post, newPost]
    setPost(newPostList)
    setPostTitle('')
  }

  function removePost(i) {
    const updutePostList = post.filter((curPost) => {
      return curPost.id !== i
    })
    setPost(updutePostList)
  }

  return (
    <>
      {/* Title */}
      <h1 className='text-center my-3'>Blog form</h1>
      {/* Form section */}
      <section className='container'>
        <h3 className='my-3'>Crea il tuo post!</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className='form-label'>Titolo del post</label>
          <input type="text" className='form-control' id='title' placeholder='Inserisci il titolo del post' value={postTitle} onChange={(e) => { setPostTitle(e.target.value) }} />
          <button type='submit' className='btn btn-primary my-3'>Invia</button>
        </form>
      </section>
      {/* PostsList section */}
      <section className='container'>
        {post.length > 0 ? (
          <ul className="list-group">
            {post.map((curPost) => (
              <li key={curPost.id} className="list-group-item">
                <span>{curPost.title}</span>
                <button className='btn d-block' onClick={() => removePost(curPost.id)}>🗑️</button>
              </li>
            ))}
          </ul>
        ) : (
          <span>Nessun post creato!</span>
        )}
      </section>
    </>
  )
}

export default App
