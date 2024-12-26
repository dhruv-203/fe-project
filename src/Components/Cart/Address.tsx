import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { usePlaceOrderMutation } from "../../Store/Slices/userApi";
import { Address as AddressType } from "../../Store/Types";
import "../../utility.css";
import { toastify } from "../../utils";
import InputField from "../Auth/InputField";
import "./Address.css";
import AddressCard from "./AddressCard";

interface AddressFormState {
  street1: string;
  street2: string;
  city: string;
  state: string;
  pincode: string;
}
interface AddressProps {
  handleCloseModal: () => void;
}
const Address: React.FC<AddressProps> = ({ handleCloseModal }) => {
  // fetch user addresses
  const addresses = useSelector<RootState, AddressType[]>(
    (state) => state.auth.user!.addresses
  ).map((val) => val.address);
  const [placeOrderTriger, { isLoading }] = usePlaceOrderMutation();

  const [formState, setFormState] = useState<AddressFormState>({
    street1: "",
    street2: "",
    city: "",
    state: "",
    pincode: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function placeOrder(address: string) {
    try {
      const res = await placeOrderTriger(address).unwrap();
      toastify(res.message, "success");
      handleCloseModal();
    } catch (error: any) {
      toastify(error?.data?.message ?? "Unexpected Error Occurred", "error");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await placeOrderTriger(
        `${formState.street1}, ${formState.street2}, ${formState.city}, ${formState.state}, ${formState.pincode}`
      ).unwrap();
      toastify(res.message, "success");
      handleCloseModal();
    } catch (error: any) {
      toastify(error?.data?.message ?? "Unexpected Error Occurred", "error");
    }
  }

  // a place to show the user addresses and input place for a user to add a new address
  // on Click of place order if there is address selected then place the order, or the entered address will be the address for the order
  // add this address in the user object and also in the order object

  return (
    <>
      <div className="fs-3 p-3 mt-3 details fw-700 text-dark justify-self-start align-self-start">
        Enter Address
      </div>
      <div className="address-parent ">
        <form
          onSubmit={handleSubmit}
          className="address-input p-4 d-flex flex-column justify-content-center align-items-center gap-3"
        >
          <InputField
            className="cus-min-width w-100  px-1 py-3"
            type="text"
            placeholder="Street 1"
            name="street1"
            onChange={handleInputChange}
            value={formState.street1}
          />
          <InputField
            type="text"
            className="cus-min-width w-100  px-1 py-3"
            placeholder="Street 2"
            name="street2"
            onChange={handleInputChange}
            value={formState.street2}
          />
          <div className="w-100 two-fields-in-one-row">
            <InputField
              type="text"
              className="cus-min-width px-2 py-3 flex-grow-3"
              placeholder="City"
              name="city"
              onChange={handleInputChange}
              value={formState.city}
            />
            <InputField
              type="text"
              className="cus-min-width px-2 py-3 flex-grow-3"
              placeholder="State"
              name="state"
              onChange={handleInputChange}
              value={formState.state}
            />
          </div>
          <div className="w-100 two-fields-in-one-row">
            <InputField
              type="text"
              className="cus-min-width px-2 py-3 flex-grow-3"
              placeholder="pincode"
              name="pincode"
              onChange={handleInputChange}
              value={formState.pincode}
            />
            <InputField
              type="submit"
              disabled={isLoading}
              className="cus-min-width fs-6 flex-grow-3 text-dark px-2 py-3 bg-light border border-primary fw-700 rounded"
              placeholder={isLoading ? "Loading..." : "submit"}
              name="submit"
            />
          </div>
        </form>
        <div className="address-showcase-container d-flex flex-column justify-content-center align-items-center gap-4">
          <div className="p-4 address-showcase d-flex flex-column justify-content-center align-items-center gap-4">
            {addresses.length > 0 ? (
              addresses.map((val, ind) => (
                <AddressCard onClick={() => placeOrder(val)} key={ind}>
                  {val}
                </AddressCard>
              ))
            ) : (
              <div className="fs-6 fw-600 p-3 text-secondary">
                No addresses avaiable...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
