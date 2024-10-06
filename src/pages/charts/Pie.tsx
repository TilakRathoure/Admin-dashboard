import AdminSidebar from "../../components/AdminSidebar";
import { DoughnutChart, PieChart } from "../../components/Chart";
import data from "../../assets/data.json";

const Pie = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4">
        <AdminSidebar />
      </div>
      <main className="chart-container w-3/4 bg-gray-100 p-7 overflow-auto">

      <div className="bg-white pt-4 rounded-lg">
        {/* Section 1 */}
        <section className="w-4/5 mx-auto">
          <h1 className="text-4xl mx-auto mb-20 font-bold ">Pie & Doughnut Charts</h1>
          <div className="w-full max-w-[25rem] mx-auto mt-24 mb-[-4rem]">
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              backgroundColor={[
                `hsl(110,80%, 80%)`,
                `hsl(110,80%, 50%)`,
                `hsl(110,40%, 50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="w-4/5 mx-auto my-16">
          <h2 className="text-center text-2xl mb-8">Order Fulfillment Ratio</h2>
          <div className="w-full max-w-[25rem] mx-auto mt-24">
            <DoughnutChart
              labels={data.categories.map((i) => i.heading)}
              data={data.categories.map((i) => i.value)}
              backgroundColor={data.categories.map(
                (i) => `hsl(${i.value * 4},${i.value}%, 50%)`
              )}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="w-4/5 mx-auto my-16">
          <h2 className="text-center text-2xl mb-8">Product Ratio</h2>
          <div className="w-full max-w-[25rem] mx-auto mt-24">
            <DoughnutChart
              labels={["In Stock", "Out Of Stock"]}
              data={[40, 20]}
              backgroundColor={["hsl(269,80%,40%)", "rgb(53, 162, 255)"]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
        </section>

        {/* Section 4 */}
        <section className="w-4/5 mx-auto my-16">
          <h2 className="text-center text-2xl mb-8">Product data.categories Ratio</h2>
          <div className="w-full max-w-[25rem] mx-auto mt-24">
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[32, 18, 5, 20, 25]}
              backgroundColor={[
                "hsl(110,80%,40%)",
                "hsl(19,80%,40%)",
                "hsl(69,80%,40%)",
                "hsl(300,80%,40%)",
                "rgb(53, 162, 255)",
              ]}
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
        </section>

        {/* Section 5 */}
        <section className="w-4/5 mx-auto my-16">
          <h2 className="text-center text-2xl mb-8">Revenue Distribution</h2>
          <div className="w-full max-w-[25rem] mx-auto mt-24">
            <PieChart
              labels={["Teenager(Below 20)", "Adult (20-40)", "Older (above 40)"]}
              data={[30, 250, 70]}
              backgroundColor={[
                `hsl(10, ${80}%, 80%)`,
                `hsl(10, ${80}%, 50%)`,
                `hsl(10, ${40}%, 50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
        </section>

        {/* Section 6 */}
        <section className="w-4/5 mx-auto my-16">
          <h2 className="text-center text-2xl mb-8">Users Age Group</h2>
          <div className="w-full max-w-[25rem] mx-auto mt-24">
            <DoughnutChart
              labels={["Admin", "Customers"]}
              data={[40, 250]}
              backgroundColor={[`hsl(335, 100%, 38%)`, "hsl(44, 98%, 50%)"]}
              offset={[0, 80]}
            />
          </div>
        </section>
        </div>
      </main>
    </div>
  );
};

export default Pie;
