import { Meta, StoryObj } from '@storybook/react';
import { CardHolderNameInput } from '@pages/addCard/components';
import { useInput } from '@hooks';

const meta = {
	title: 'PAGES/AddCard/CardHolderNameInput',
	component: CardHolderNameInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CardHolderNameInput>;

export default meta;
type Story = StoryObj<typeof CardHolderNameInput>;

const TestCardHolderNameInput = () => {
	const { value: cardHolderName, handleChange: handleCardHolderNameChange } =
		useInput({});
	return (
		<CardHolderNameInput
			value={cardHolderName}
			onChange={handleCardHolderNameChange}
		/>
	);
};

export const Default: Story = {
	render: () => <TestCardHolderNameInput />,
};
