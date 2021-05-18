import { render, screen } from "@testing-library/react";
import Heading from ".";

describe('<Heading />', () => {
    it('Should render a Heading', () => {
        render(<Heading />);

        expect(screen.getByRole('heading', { name: /Template React com Next JS/i })).toBeInTheDocument();
    });
})