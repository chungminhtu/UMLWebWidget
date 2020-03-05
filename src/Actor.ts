/*
    Copyright (c) 2020 Xavier Leclercq
    Released under the MIT License
    See https://github.com/CodeSmithyIDE/UMLWebWidget/blob/master/LICENSE.txt
*/

'use strict'

import { DiagramElement, DiagramElementType } from "./DiagramElement"
import { CSSClassName } from "./CSSClassNames"
import { ConnectionPoint } from "./ConnectionPoint"
import { ConnectionPointPosition } from "./ConnectionPointPosition"
import { SVGUtils } from "./SVGUtils"
import { SVGLayer } from "./SVGLayer"
import { IDGenerator } from "./IDGenerator"
import { Errors } from "./Errors"

/**
  An actor on a use case diagram.

  @extends DiagramElement
*/
class Actor extends DiagramElement {
    errors: Errors
    shapeLayer: SVGLayer
    textLayer: SVGLayer
    actorDescription
    connectionPointsRectangle

    constructor(svg, idGenerator: IDGenerator, actorDescription, errors: Errors) {
        super(svg, DiagramElementType.Actor, idGenerator.createID("actor--" + actorDescription.name))
        this.errors = errors
        this.shapeLayer = this.layers.createLayer("shape")
        this.textLayer = this.layers.createLayer("text")
        this.actorDescription = actorDescription
        this.connectionPointsRectangle = null
    }

    draw(): void {
        this.update()
        let g = this.layers.svg.group().addClass(CSSClassName.Actor)
        g.id(this.id)
        this.layers.getLayer("shape").write(g)
        this.layers.getLayer("text").write(g)
    }

    createConnectionPoint(svg) {
        let newPoint = new ConnectionPoint(svg, this, ConnectionPointPosition.BottomCenter, this.errors)
        return newPoint
    }

    doUpdate() {
        let borderAdjustment = {
            top: this.y,
            left: this.x
        }
        
        let shapeGroup = this.shapeLayer.group().addClass(CSSClassName.Actor_Shape)
        let textGroup = this.textLayer.group().addClass(CSSClassName.Actor_Name)
        let textDef = SVGUtils.Text(textGroup, borderAdjustment.left, borderAdjustment.top + 35, this.actorDescription.name)
        let width = textDef.bbox().width
        let offset = ((width - 16) / 2)
        SVGUtils.Circle(shapeGroup, borderAdjustment.left + 2 + offset, borderAdjustment.top + 1, 12)
        SVGUtils.Line(shapeGroup, borderAdjustment.left + 8 + offset, borderAdjustment.top + 13, borderAdjustment.left + 8 + offset, borderAdjustment.top + 26)
        SVGUtils.Line(shapeGroup, borderAdjustment.left + offset, borderAdjustment.top + 18, borderAdjustment.left + 16 + offset, borderAdjustment.top + 18)
        SVGUtils.Line(shapeGroup, borderAdjustment.left + 8 + offset, borderAdjustment.top + 26, borderAdjustment.left + offset, borderAdjustment.top + 33)
        SVGUtils.Line(shapeGroup, borderAdjustment.left + 8 + offset, borderAdjustment.top + 26, borderAdjustment.left + 16 + offset, borderAdjustment.top + 33)

        this.connectionPointsRectangle = {
            "x": borderAdjustment.left,
            "y": borderAdjustment.top,
            "w": width,
            "width": width,
            "height": (35 + textDef.bbox().height),
            "h": (35 + textDef.bbox().height),
            "x2": (borderAdjustment.left + width),
            "y2": (borderAdjustment.top + 35 + textDef.bbox().height),
            "cx": (borderAdjustment.left + (width / 2)),
            "cy": (borderAdjustment.top + ((35 + textDef.bbox().height) / 2))
        }
    }

    doGetConnectionPointsRectangle() {
        return this.connectionPointsRectangle 
    }

}

export { Actor }
