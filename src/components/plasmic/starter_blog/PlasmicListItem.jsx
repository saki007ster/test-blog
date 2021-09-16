// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5hcXucFLbU2HXXyViGsKcc
// Component: CNXBrZUeuly
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_starter_blog.module.css" // plasmic-import: 5hcXucFLbU2HXXyViGsKcc/projectcss
import * as sty from "./PlasmicListItem.module.css" // plasmic-import: CNXBrZUeuly/css

export const PlasmicListItem__VariantProps = new Array()

export const PlasmicListItem__ArgProps = new Array(
  "title",
  "description",
  "date"
)

function PlasmicListItem__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      component={Link}
      href={"/post"}
      platform={"gatsby"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Blog Post Title",
        value: args.title,
        className: classNames(sty.slotTitle),
      })}

      {p.renderPlasmicSlot({
        defaultContents: "January 1, 2020",
        value: args.date,
        className: classNames(sty.slotDate),
      })}

      {p.renderPlasmicSlot({
        defaultContents: "Blog description goes here.",
        value: args.description,
      })}
    </p.Stack>
  )
}

const PlasmicDescendants = {
  root: ["root"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicListItem__ArgProps,
      internalVariantPropNames: PlasmicListItem__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicListItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicListItem"
  } else {
    func.displayName = `PlasmicListItem.${nodeName}`
  }
  return func
}

export const PlasmicListItem = Object.assign(
  // Top-level PlasmicListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicListItem
    internalVariantProps: PlasmicListItem__VariantProps,
    internalArgProps: PlasmicListItem__ArgProps,
  }
)

export default PlasmicListItem
/* prettier-ignore-end */
