import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

export const BreadCrumb: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  const pathnames = pathname.split("/").filter((item) => item);

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  const baseCrumbs = [
    {
      name: "Trang chủ",
      path: "/",
    },
    {
      name: "Sản phẩm",
      path: "/",
    },
  ];

  const dynamicCrumbs = pathnames.slice(1).map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 2).join("/")}`;
    return {
      name: capitalize(name),
      path: routeTo,
    };
  });

  const allCrumbs = [...baseCrumbs, ...dynamicCrumbs];

  return (
    <div className="p-4 py-4">
    <Breadcrumb
  items={allCrumbs.map((crumb, index) => {
    const isLast = index === allCrumbs.length - 1;
    return {
      title: isLast ? (
        crumb.name
      ) : (
        <Link to={crumb.path}>{crumb.name}</Link>
      ),
    };
  })}
/>
    </div>
  );
};


