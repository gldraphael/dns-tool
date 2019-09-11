/*
Copyright 2019 DigitalOcean

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Imports the line generator.
import LineGenerator from "./line_generator"

// Defines the active line.
let activeLine: LineGenerator | undefined

// Destroys the line.
const destroy = () => {
    if (activeLine) activeLine.destroy()
    activeLine = undefined
}

// Spawns the line.
export default (lineRef: HTMLElement[] | undefined) => {
    destroy()
    if (lineRef) activeLine = new LineGenerator(lineRef[0], lineRef[1])
}

// Despawn the line on resize.
window.addEventListener("resize", destroy)
