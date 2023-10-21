export const warrior = {
    'coords': {
        // idle right
        "idle-right-0": [[1381, 42, 54, 102], [26, 50]],
        'idle-right-1': [[1573, 42, 54, 102], [26, 50]],
        "idle-right-2": [[1762, 42, 57, 102], [29, 50]],
        "idle-right-3": [[1954, 42, 57, 102], [29, 50]],
        "idle-right-4": [[2146, 39, 57, 105], [29, 53]],
        "idle-right-5": [[2338, 39, 57, 105], [29, 53]],
        "idle-right-6": [[2530, 39, 57, 105], [29, 53]],
        "idle-right-7": [[2722, 39, 57, 105], [29, 53]],
        "idle-right-8": [[2917, 39, 54, 105], [26, 53]],
        "idle-right-9": [[3109, 39, 54, 105], [26, 53]],
        "idle-right-10": [[3304, 42, 48, 102], [23, 50]],
        "idle-right-11": [[3496, 42, 48, 102], [23, 50]],
        // move right
        "move-right-0": [[1381, 429, 54, 99], [26, 50]],
        'move-right-1': [[1573, 426, 51, 102], [26, 50]],
        "move-right-2": [[1765, 423, 48, 102], [26, 50]],
        "move-right-3": [[1957, 426, 48, 102], [26, 50]],
        "move-right-4": [[2149, 429, 48, 99], [26, 50]],
        "move-right-5": [[2338, 426, 51, 102], [29, 50]],
        "move-right-6": [[2530, 423, 57, 105], [29, 50]],
        "move-right-7": [[2722, 426, 60, 102], [29, 50]],
        // dash right
        "dash-right-0": [[1363, 816, 63, 96], [37, 50]],
        'dash-right-1': [[1576, 816, 54, 96], [25, 50]],
        "dash-right-2": [[1768, 816, 54, 96], [25, 50]],
        "dash-right-3": [[1963, 816, 48, 96], [22, 50]],
        "dash-right-4": [[2155, 813, 48, 99], [19, 53]],
        "dash-right-5": [[2347, 810, 51, 102], [19, 56]],
        "dash-right-6": [[2533, 810, 54, 102], [22, 56]],
    },
    'anim': {
        'idleRight': [
            'idle-right-0', 'idle-right-1', 'idle-right-2', 'idle-right-3', 'idle-right-4',
            'idle-right-5', 'idle-right-6', 'idle-right-7', 'idle-right-8', 'idle-right-9',
            'idle-right-10', 'idle-right-11'
        ],
        'walkRight': [
            'move-right-0', "move-right-1", 'move-right-2', 'move-right-3', 'move-right-4',
            'move-right-5', 'move-right-6', 'move-right-7'
        ],
        'dashRight': [
            'dash-right-0', 'dash-right-1', 'dash-right-2', 'dash-right-3', 'dash-right-4', 
            'dash-right-5', 'dash-right-6'
        ]
    },
    'path': "./assets/Characters/warrior.png",
    'state': 'dashRight'
}