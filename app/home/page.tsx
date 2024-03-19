import { Layout } from "../ui/layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col h-40">
        <div className="flex-grow">
          <p className="text-4xl font-bold mb-4 pt-4">Home</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
