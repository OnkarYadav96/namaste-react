#React basic 
# How to add react to our Project
# how they are binding to our DOM tree


# parcel
- File wathing alorithm
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- Caching - Faster Builds
- Minification
- Bundling
- Compressing
- HTTP's
- Tree Shaking - will remove unused code
- Diagnostic
- Code Spliting
- Image Optimization
- Error Handling
- Different build for Dev & Production

# Diff algorithm or Virtual DOM
React is Fast because of Virtual DOM.
But What is Virtual DOM ==> Virtual DOM is representation of Actual DOM.

Virtaul DOM === React Element (Object)
Virtal DOM === React.createElement("h1",{id:"heading","Hi i am Onakr"}) === React Element (Object)

/**
 To Find the difference between 2 HTML is different but to find the difference between 2 Objects is Easy
 That why React is fast because it has efficient DOM Manupulation by using this Diff Algo & Virtual DOM
 */