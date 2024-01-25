const { addPost } = require('@/lib/action');

const ServerActionComponent = () => {
  return (
    <div>
      <form action={addPost}>
        <input type='text' placeholder='Title' name='title' />
        <input type='desc' placeholder='Description' name='desc' />
        <input type='text' placeholder='Slug' name='slug' />
        <input type='text' placeholder='userId' name='userId' />
        <button>Create Post</button>
      </form>
    </div>
  );
};
export default ServerActionComponent;
