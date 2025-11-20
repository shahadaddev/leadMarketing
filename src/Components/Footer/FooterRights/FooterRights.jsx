const FooterRights = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex justify-center items-center mx-auto py-2 px-5 rounded-full">
      <div>
        <h5 className="font-medium text-center">
          &copy; {year} Lead Marketing Inc. All rights reserved
        </h5>
      </div>
    </div>
  );
};

export default FooterRights;
