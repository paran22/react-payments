import {
	Action,
	StepperState,
	initialState,
	stepperReducer,
} from '@reducers/stepperReducer';
import { Children, createContext, useContext, useReducer } from 'react';

interface ContextType {
	state: StepperState;
	dispatch: React.Dispatch<Action>;
}

export const StepperContext = createContext<ContextType>({
	state: initialState,
	dispatch: () => null,
});

interface StepperProviderProps {
	children: React.ReactNode;
}

export const StepperProvider = ({ children }: StepperProviderProps) => {
	const [state, dispatch] = useReducer(stepperReducer, initialState);

	const childrenArray = Children.toArray(children).filter(
		Boolean,
	) as React.ReactElement[];

	return (
		<StepperContext.Provider value={{ state, dispatch }}>
			{childrenArray[state.currentStep]}
		</StepperContext.Provider>
	);
};

export const useStepper = () => useContext(StepperContext);