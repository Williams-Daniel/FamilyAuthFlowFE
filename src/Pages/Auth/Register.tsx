import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/fam-removebg-preview.png";
import img2 from "../../assets/dummy-prod-1.jpg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFamily } from "../../Apis/AuthApis";
import { useState } from "react";

const Register = () => {
  const [avatar, setAvatar] = useState<string>(img2);
  const [image, setImage] = useState<string>("");

  const onHandleImage = (el: any) => {
    const localAvatar = el.target.files[0];
    const saveAvatar = URL.createObjectURL(localAvatar);
    setAvatar(saveAvatar);
    setImage(localAvatar);
  };

  const navigate = useNavigate();

  const model = yup.object({
    Familyname: yup.string().required(),
    email: yup.string().required(),
    Address: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { Familyname, email, password, Address } = data;
    console.log(data)
    const formData = new FormData();

    formData.append("Familyname", Familyname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("Address", Address);
    formData.append("avatar", image);

    RegisterFamily(formData).then((res) => {
        console.log(res)
      navigate("/signin");
    });
  });

  return (
    <div
      className="
    w-full
    h-[100vh]
    bg-[#ffceae]
    flex
    justify-center
    items-center
    "
    >
      <div
        className="
        w-[800px]
        h-[750px]
        flex
        rounded-[10px]
        "
      >
        {/* left */}
        <div
          className="
            w-[50%]
            h-[100%]
            rounded-l-[10px]
            flex
            justify-center
            items-center
            "
        >
          <div className="
          absolute
          z-20
          top-[200px]
          left-[370px]
          text-[#75473b]
          text-[25px]
          font-[500]
          ">`my family`</div>
          <div
            className="
                w-[100px]
                h-[100px]
                rounded-[50%]
                border-[#75473b]
                border-[2px]
                absolute
                top-[80px]
                left-[300px]
                "
          />
          <div
            className="
                w-[100px]
                h-[100px]
                rounded-[50%]
                bg-[#75473b]
                border-[2px]
                absolute
                top-[200px]
                left-[520px]
                "
          />
          <div
            className="
                w-[300px]
                h-[300px]
                rounded-[50%]
                border-[#75473b]
                border-[2px]
                absolute
                top-[350px]
                left-[280px]
                "
          />
          <div
            className="
                w-[200px]
                h-[200px]
                rounded-[50%]
                bg-[#75473b]
                border-[2px]
                absolute
                top-[550px]
                left-[280px]
                "
          />
          <img
            className="
                h-[300px]
                rounded-[50%]
                z-10
                "
            src={img}
          />
        </div>
        {/* left ends */}

        {/* right */}
        <form
          className="
            rounded-r-[10px]
            w-[50%]
            h-[100%]
            bg-[#ffceae]
            flex
            bg-
            flex-col
            justify-center
            items-center
            "
          onSubmit={onSubmit}
        >
          <div
            className="
                text-[25px]
                font-[500]
                text-[#69301A]
                "
          >
            Create family account
          </div>
          <div
            className="
                flex
                flex-col
                justify-center
                items-center
                "
          >
            <img
              className="
                    w-[100px]
                    h-[100px]
                    rounded-[50%]
                    border-[2px]
                    border-[#6B3D2D]
                    object-cover
                    "
              src={avatar}
            />
            <label
              className="
                    py-[3px]
                    px-[6px]
                    bg-[#5d352c]
                    text-[white]
                    rounded-[5px]
                    mt-1
                    hover:scale-[1.02]
                    hover:transition-all
                    hover:cursor-pointer
                    duration-300
                    "
              htmlFor="image"
            >
              Upload Image
            </label>
            <input
              className="
                    hidden
                    "
              placeholder="image"
              type="file"
              id="image"
              accept="image/png, image/jpg, image/jpeg"
              onChange={onHandleImage}
            />
          </div>
          <div
            className="
                    flex
                    flex-col
                    my-[5px]
                    mb-[5px]
                    "
          >
            <label
              className="
                        text-[14px]
                        font-light
                        "
            >
              Familyname
            </label>
            <input
              className="
                        w-[270px]
                        bg-[#ffceae]
                        h-[35px]
                        border-[#543129]
                        border-[2px]
                        rounded-[5px]
                        placeholder:text-[14px]
                        placeholder:text-black
                        outline-none
                        p-[10px]
                        "
              placeholder="Williams' Family"
              {...register("Familyname")}
            />
            {errors.Familyname?.message && (
              <div
                className="
                            text-[red]
                            text-[11px]
                            font-[bold]
                            "
              >
                please fill this field
              </div>
            )}
          </div>
          <div
            className="
                    flex
                    flex-col
                    my-[5px]
                    mb-[5px]
                    "
          >
            <label
              className="
                        text-[14px]
                        font-light
                        "
            >
              email
            </label>
            <input
              className="
                        w-[270px]
                        h-[35px]
                        border-[#543129]
                        bg-[#ffceae]
                        placeholder:text-black
                        outline-none
                        border-[2px]
                        rounded-[5px]
                        placeholder:text-[14px]
                        p-[10px]
                        "
              placeholder="test@gmail.com"
              {...register("email")}
            />
            {errors.Address?.message && (
              <div
                className="
                            text-[red]
                            text-[11px]
                            font-[bold]
                            "
              >
                please fill this field
              </div>
            )}
          </div>
          <div
            className="
                    flex
                    flex-col
                    my-[5px]
                    mb-[5px]
                    "
          >
            <label
              className="
                        text-[14px]
                        font-light
                        "
            >
              Address
            </label>
            <input
              className="
                        w-[270px]
                        h-[35px]
                        border-[#543129]
                        bg-[#ffceae]
                        border-[2px]
                        rounded-[5px]
                        placeholder:text-black
                        outline-none
                        placeholder:text-[14px]
                        p-[10px]
                        "
              placeholder="25, Okito street"
              {...register("Address")}
            />
            {errors.Address?.message && (
              <div
                className="
                            text-[red]
                            text-[11px]
                            font-[bold]
                            "
              >
                please fill this field
              </div>
            )}
          </div>
          <div
            className="
                    flex
                    flex-col
                    my-[5px]
                    mb-[5px]
                    "
          >
            <label
              className="
                        text-[14px]
                        font-light
                        "
            >
              Password
            </label>
            <input
              className="
                        w-[270px]
                        h-[35px]
                        bg-[#ffceae]
                        border-[#543129]
                        placeholder:text-black
                        outline-none
                        border-[2px]
                        rounded-[5px]
                        placeholder:text-[14px]
                        p-[10px]
                        "
              placeholder="myPassword$$%%"
              {...register("password")}
            />
            {errors.password?.message && (
              <div
                className="
                            text-[red]
                            text-[11px]
                            font-[bold]
                            "
              >
                please fill this field
              </div>
            )}
          </div>
          <div
            className="
                    flex
                    flex-col
                    my-[5px]
                    mb-[5px]
                    "
          >
            <label
              className="
                        text-[14px]
                        font-light
                        "
            >
              Confirm password
            </label>
            <input
              className="
                        w-[270px]
                        h-[35px]
                        bg-[#ffceae]
                        border-[#543129]
                        placeholder:text-black
                        outline-none
                        border-[2px]
                        rounded-[5px]
                        placeholder:text-[14px]
                        p-[10px]
                        "
              placeholder="myPassword$$%%"
              {...register("confirm")}
            />
            {errors.confirm?.message && (
              <div
                className="
                            text-[red]
                            text-[11px]
                            font-[bold]
                            "
              >
                please fill this field
              </div>
            )}
          </div>
         

          <button
            className="
                     h-[35px]
                     w-[270px]
                     border-black
                     border-[1px]
                     rounded-[5px]
                     mt-1
                     flex
                     justify-center
                     items-center
                     hover:scale-[1.02]
                     hover:transition-all
                     hover:cursor-pointer
                     duration-300
                     text-[white]
                     bg-[#543129]
                    "
            type="submit"
          >
            Register
          </button>

          <hr
            className="
                    w-[270px]
                    border-[0.5px]
                    border-[#543129]
                    mt-5
                    "
          />
          <div
            className="
                    flex
                    mt-[20px]
                    "
          >
            <div
              className="
                        text-[14px]
                        "
            >
              Already have an account?
            </div>
            <Link to="/signin">
              <div
                className="
                        text-[14px]
                        ml-1
                        text-[brown]
                        "
              >
                sign-in.
              </div>
            </Link>
          </div>
        </form>
        {/* right ends */}
      </div>
    </div>
  );
};

export default Register;
