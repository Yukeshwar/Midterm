# p5.js Template

This is a README file that can be used to describe and document your assignment.
Milestone 2 
Project: Kanye West's My Beautiful Dark Twisted Fantasy

1. What I’ve Done This Week
This week, I focused on setting up the project structure, creating the basic Scene class, and laying out the foundational code for time-based transitions between scenes. I designed the initial visuals and implemented a basic framework for displaying each scene sequentially based on a time-based logic. Additionally, I created placeholders for functions that will handle scene transitions, distortions, and interactivity.

2. Description of Files, Classes, Objects, and Arrays
Files: The main project file includes code for rendering scenes and managing transitions. Additional files may include assets or configurations for specific visuals and sounds.
Scene Class: This class represents each "moment" of the album. Each Scene object has properties for visuals (such as colors, shapes, and distortion levels) and methods for displaying and distorting these visuals.
Array of Scenes: An array holds multiple Scene objects, each representing a different visual state. This array allows the program to iterate through each scene sequentially.
Variables: I’ve included variables to keep track of the current scene index and elapsed time to control transitions.
3. Description of Interactivity and Time-Based Logic
The project is primarily time-based, with each scene transitioning automatically after a set duration. Each scene will display unique visual properties and undergo gradual distortions over time to reflect the mood of the album. Although primarily time-based, there is also minimal keyboard interactivity to reset scenes or adjust the visuals if needed.

4. Description of Functions
setupScenes(): Initializes each Scene object with specific properties and adds them to the scenes array.
transitionScenes(): Checks if the current scene's time limit has been reached and, if so, switches to the next scene.
displayScene(): Draws the visuals for the current scene.
distortVisuals(): Adds distortion effects to the visuals of each scene to symbolize the album’s themes.
keyPressed(): Allows for keyboard interactivity, like resetting or modifying the current scene visuals.


PESUDO CODE:
// Project Setup
initialize project canvas with the desired dimensions
initialize an array to hold all scenes for different moments of the album
initialize variables to keep track of the current scene and elapsed time

// Define Scene Class
class Scene:
    constructor(parameters for visuals like color, shape, distortion level)
        set initial properties for each scene
    method display() // function to draw scene visuals
        render background and main visuals based on scene properties
    method distort() // function to modify visuals over time
        apply distortion effects to visuals

// Setup Scenes
function setupScenes():
    for each album moment:
        create a new Scene object with specific properties
        add the Scene object to the scenes array

// Transition Logic
function transitionScenes():
    if elapsed time exceeds scene duration:
        move to the next scene in the scenes array
        reset elapsed time for new scene

// Main Render Loop (runs continuously)
function render():
    clear canvas
    update elapsed time
    call transitionScenes() to check if it's time to switch scenes
    call displayScene() to render the current scene

// Display Current Scene
function displayScene():
    if current scene exists:
        call currentScene.display() to draw visuals
        call currentScene.distort() to apply any ongoing distortion effects

// Keyboard Interactivity (optional)
function keyPressed(event):
    if key is pressed for reset or adjustments:
        reset current scene or adjust visuals accordingly

// Run Project
setupScenes()
start render loop



For my project, I’ve chosen one of my all-time favorite albums, Kanye West's My Beautiful Dark Twisted Fantasy.The album explores Kanye's relationship with fame, excess, self-destruction, and redemption, blending genres like hip-hop, orchestral music, and rock. I plan to focus on the fragmented and chaotic nature of the album, drawing inspiration from its controversial cover and themes. The central visual will be abstract, representing how fantasy and fame can distort reality. The project will be time-based, with visuals that change and evolve over time, reflecting the emotional journey and shifting tones within the album. By distorting the imagery over time, I aim to symbolize Kanye's exploration of ego, excess, and self-destruction.