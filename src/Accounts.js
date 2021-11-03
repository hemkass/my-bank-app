import data from "./data.json";
import Account from "./Account";

const Accounts = () => {
  return (
    <div className="wrapper shadow">
      {data.map((elem, index) => {
        console.log(elem);
        return (
          <div className="account ">
            <div className="title">{elem.name}</div>
            <Account key={index} operations={elem.operations} />
          </div>
        );
      })}
    </div>
  );
};

export default Accounts;
