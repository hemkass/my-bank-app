const Account = (prop) => {
  return (
    <div>
      {prop.operations.map((elem, index) => {
        return (
          <p key={index} className="op">
            <span className="date">{elem.date}</span>
            <span>{elem.description}</span>
            <span> {elem.amount} € </span>
          </p>
        );
      })}
    </div>
  );
};

export default Account;
