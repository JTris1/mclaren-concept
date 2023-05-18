import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponent = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1024}
    height={160}
    viewBox="-0.781 -0.781 176.57 27.583"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M139 10.922c24.1-15.6 56.5-16.1 18.7 9.1l.6-.8c10.7-14.7-11.1-11.4-18.8-8.5zm-88.2 11.1H61v4H49.2c-5 0-7.2-1.5-7.2-5.5v-.9c0-3.4 2-5.6 7-5.6h12v4H50.8a1.8 1.8 0 0 0-1.8 1.8v.5a1.8 1.8 0 0 0 1.8 1.7zm19.2-10v10h6v4H62v-14zm-37.9 1.8a8.1 8.1 0 0 1 4.9-1.8h4v14h-8v-7l-7.7 7H18v-7l-8.9 7H0l15.9-12c1.5-1.1 2.5-2 5.1-2h5v7zm67.9 1.5a2.3 2.3 0 0 1 2.5-2.3h9.5v4h-5v9h-7zm46.9-2.3c6 0 8.1 1.3 8.1 5.7v7.3h-7v-5a3 3 0 0 0-3-3h-3v8h-7v-13zm-54.6 0c4.6 0 6.7 1.9 6.7 5.1v3c0 3.7-2.1 4.9-7.2 4.9h-7.9c-2.9 0-5-.3-6.1-1.3a3.6 3.6 0 0 1-.8-2.3v-.5c0-2 1.2-3.9 5-3.9h9c0-.9.1-1-1-1H78v-4zm-1.3 8.5v-.5h-5.5a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5zm36.6-8.5c5.3 0 6.4 1.6 6.4 3.8v.5c0 2.4-1.9 3.7-5 3.7h-9c0 .9.9 1 2 1h11v4h-13.7c-4.3 0-6.3-1.8-6.3-5.1v-2.3c0-3.8 2.1-5.6 6.9-5.6zm-1.1 5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5v.5z" />
    <script />
  </svg>
);
export default SvgComponent;
