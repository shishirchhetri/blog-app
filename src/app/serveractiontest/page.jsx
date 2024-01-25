const { sayHello } = require('@/lib/action');

const ServerActionComponent = () => {
  return (
    <form action={sayHello}>
      <button>Say Hello</button>
    </form>
  );
};
export default ServerActionComponent;
