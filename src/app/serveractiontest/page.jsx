const { addPost, deletePost } = require('@/lib/action');

const ServerActionComponent = () => {
  return (
    <div>
      <h3>Add Post</h3>
      <form action={addPost}>
        <input type='text' placeholder='Title' name='title' />
        <input type='desc' placeholder='Description' name='desc' />
        <input type='text' placeholder='Slug' name='slug' />
        <input type='text' placeholder='userId' name='userId' />
        <button>Create Post</button>
      </form>
      <h3>Delete Post By Id</h3>
      <form action={deletePost}>
        <input type='text' placeholder='Post Id' name='id' />
        <button>Delete Post</button>
      </form>
    </div>
  );
};
export default ServerActionComponent;
