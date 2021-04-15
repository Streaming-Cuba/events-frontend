import React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import NextLink from "next/link";
import MuiLink from "@material-ui/core/Link";

interface LinkProps  {
  activeClassName?: string,
  as?: string | React.ReactElement,
  className?: string,
  href?: string | { pathname: string },
  innerRef?: Exclude<string, string>
  naked?: boolean,
  onClick?: () => void,
  prefetch?: boolean,
  children?: React.ReactNode | React.ReactNodeArray,
}


const NextComposed = React.forwardRef(function NextComposed(props: any, ref: any) {
	const { as, href, ...other } = props;

	return (
		<NextLink href={href} as={as}>
			<a ref={ref} {...other} />
		</NextLink>
	);
});

function Link(props: LinkProps) {
	const {
		href,
		activeClassName = "active",
		className: classNameProps,
		innerRef,
		naked,
		...other
	} = props;

	const router = useRouter();
	const pathname = typeof href === "string" ? href : href.pathname;
	const className = clsx(classNameProps, {
		[activeClassName]: router.pathname === pathname && activeClassName,
	});

	if (naked) {
		return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
	}

	// @ts-ignore
	return (
		<MuiLink component={NextComposed} className={className} ref={innerRef} href={typeof href === "string" && href} {...other} />
	);
}

export default React.forwardRef((props, ref: Exclude<string, string>) => <Link {...props} innerRef={ref} />);