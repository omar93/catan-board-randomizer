import { writable } from 'svelte/store';

// Create stores for resources and grid numbers
function createResourceStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        initialize: () => {
            let resourceMapper = {
                wood: 4,
                brick: 3,
                sheep: 4,
                wheat: 4,
                stone: 3,
                dessert: 1 
            };
            let resourcesArray = [];
            
            Object.keys(resourceMapper).forEach(resource => {
                let value = resourceMapper[resource];
                for (let i = 0; i < value; i++) {
                    resourcesArray = [...resourcesArray, resource];
                }
            });
            
            set(shuffleArray([...resourcesArray]));
        },
        pop: () => {
            update(resources => {
                if (resources.length === 0) return [];
                const newResources = [...resources];
                newResources.pop();
                return newResources;
            });
        },
        reset: () => {
            update(resources => {
                const initialResources = createResourceStore().initialize();
                return initialResources;
            });
        }
    };
}

function createGridNumbersStore() {
    const initialGridNumbers = [
        { A: 5 }, { B: 2 }, { C: 6 },  
        { L: 10 }, { M: 9 }, { N: 4 }, { D: 3 },
        { K: 8 }, { R: 11 }, { O: 5 }, { E: 8 },  
        { J: 4 }, { Q: 3 }, { P: 6 }, { F: 10 }, 
        { I: 11 }, { H: 12 }, { G: 9 },  
    ];

    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        initialize: () => {
            set([...initialGridNumbers]);
        },
        pop: () => {
            update(numbers => {
                if (numbers.length === 0) return [];
                const newNumbers = [...numbers];
                newNumbers.pop();
                return newNumbers;
            });
        },
        reset: () => {
            set([...initialGridNumbers])
        }
    };
}

// Helper function (keeping your original implementation)
function shuffleArray(array) {  
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }
    return newArray;
}

// Create and export the stores
export const resourceStore = createResourceStore();
export const gridNumberStore = createGridNumbersStore();