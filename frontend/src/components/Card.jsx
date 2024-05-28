const Card = ({ children, bg = "bg-gray-800" }) => {
   return <div className={`${bg} p-6 rounded-lg shadow-lg`}>{children}</div>;
};
export default Card;
