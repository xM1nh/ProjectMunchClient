import IconComponent from "@/components/IconComponent";
import { TGetReverseGeocoding } from "@/types";

interface IUserAddedPointOfInterestCard {
  status: "error" | "success" | "pending";
  data?: TGetReverseGeocoding;
}

const UserAddedPointOfInterestCard = ({
  status,
  data,
}: IUserAddedPointOfInterestCard) => {
  switch (status) {
    case "pending":
      return <div className="skeleton"></div>;
    case "success":
      if (data?.features.length !== 0) {
        return (
          <div className="flex flex-row gap-4">
            <div>
              <p className="text-wrap text-sm font-semibold">
                {data?.features[0].place_name}
              </p>
              <div className="divider my-0.5"></div>
              <p className="text-xs">
                {data?.query[0].toFixed(5)}, {data?.query[1].toFixed(5)}
              </p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="rounded-full outline outline-1 outline-black flex p-1">
                <IconComponent name="bookmark" />
              </div>
              <div className="rounded-full outline outline-1 outline-black flex p-1">
                <IconComponent name="share" />
              </div>
            </div>
          </div>
        );
      } else {
        return <div>No data</div>;
      }
    case "error":
      return (
        <div className="alert alert-error">
          <span>Something is not right...</span>
        </div>
      );
    default:
      return <div className="skeleton"></div>;
  }
};

export default UserAddedPointOfInterestCard;
