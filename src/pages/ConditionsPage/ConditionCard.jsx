import { Link } from "react-router-dom";

const ConditionCard = ({ condition }) => (
  <div className="group card-hover bg-white overflow-hidden shadow-elegant transition-all duration-500">
    <div className="relative h-64 overflow-hidden">
      <img
        src={condition.image}
        alt={condition.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="p-8">
      <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
        {condition.category}
      </span>
      <h3 className="font-heading text-2xl text-text-primary mt-2 mb-4">
        {condition.title}
      </h3>
      <p className="text-text-secondary text-sm font-body leading-relaxed mb-6">
        {condition.description}
      </p>
      <Link
        to={condition.link}
        className="inline-block text-[11px] uppercase tracking-widest font-bold text-primary border-b border-primary/30 hover:border-primary transition-all"
      >
        Explore Treatment
      </Link>
    </div>
  </div>
);
export default ConditionCard;
