// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fiUhXe8Zsj5ebqGZX94BP2
// Component: z_KrvXv5nJ0reg
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_play_plasmic_levels_start_here.module.css"; // plasmic-import: fiUhXe8Zsj5ebqGZX94BP2/projectcss
import * as sty from "./PlasmicButton6.module.css"; // plasmic-import: z_KrvXv5nJ0reg/css

export const PlasmicButton6__VariantProps = new Array("type", "border", "size");

export const PlasmicButton6__ArgProps = new Array();

function PlasmicButton6__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        defaultcss.__wab_text,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__border_link]: hasVariant(variants, "border", "link"),
          [sty.root__border_rounded]: hasVariant(variants, "border", "rounded"),
          [sty.root__size_large]: hasVariant(variants, "size", "large"),
          [sty.root__size_small]: hasVariant(variants, "size", "small"),
          [sty.root__type_danger]: hasVariant(variants, "type", "danger"),
          [sty.root__type_primary]: hasVariant(variants, "type", "primary")
        }
      )}
    >
      {"Click me"}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton6__ArgProps,
      internalVariantPropNames: PlasmicButton6__VariantProps
    });

    return PlasmicButton6__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton6";
  } else {
    func.displayName = `PlasmicButton6.${nodeName}`;
  }
  return func;
}

export const PlasmicButton6 = Object.assign(
  // Top-level PlasmicButton6 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton6
    internalVariantProps: PlasmicButton6__VariantProps,
    internalArgProps: PlasmicButton6__ArgProps
  }
);

export default PlasmicButton6;
/* prettier-ignore-end */
