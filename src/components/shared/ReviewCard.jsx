import { Avatar } from "@heroui/react";

const ReviewCard = ({ review }) => {
  return (
    <div className="p-4 border-2 shadow rounded-md space-y-4 bg-slate-100">
      <div>
        <Avatar className="border-2 shadow border-white rounded-full" size="lg">
          <Avatar.Image alt={review.reviewer_name} src={review.image} />
        </Avatar>
      </div>

      <div className="space-y-3">
        {" "}
        <p>{review.review}</p>
        <h2 className="text-2xl font-bold text-red-500">
          {review.reviewer_name}{" "}
        </h2>
        <p className="text-sm italic">{review.reviewer_position} </p>
      </div>
    </div>
  );
};

export default ReviewCard;
