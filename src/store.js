import create from 'zustand';

const useStore = create((set) => ({
    people: ['John Dou', 'Jane Dou'],
    addPerson: (person) => set((state) => ({ people: [...state.people, person] }))
}));

export default useStore;
