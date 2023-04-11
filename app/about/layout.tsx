import { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

const AboutLayout = ({ children }: Props) => {
    return (
        <div>
            <h2>About layout page</h2>
            <h3>this is an h3 for the layout</h3>
            <div>{children}</div>
        </div>
    )
}

export default AboutLayout
