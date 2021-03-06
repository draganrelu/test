// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fiUhXe8Zsj5ebqGZX94BP2
// Component: u3pwRzE0w1mhIF
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
import * as sty from "./PlasmicCompletedButton3.module.css"; // plasmic-import: u3pwRzE0w1mhIF/css

export const PlasmicCompletedButton3__VariantProps = new Array(
  "type",
  "border",
  "size"
);

export const PlasmicCompletedButton3__ArgProps = new Array();

function PlasmicCompletedButton3__RenderFunc(props) {
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
      internalArgPropNames: PlasmicCompletedButton3__ArgProps,
      internalVariantPropNames: PlasmicCompletedButton3__VariantProps
    });

    return PlasmicCompletedButton3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedButton3";
  } else {
    func.displayName = `PlasmicCompletedButton3.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedButton3 = Object.assign(
  // Top-level PlasmicCompletedButton3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCompletedButton3
    internalVariantProps: PlasmicCompletedButton3__VariantProps,
    internalArgProps: PlasmicCompletedButton3__ArgProps
  }
);

export default PlasmicCompletedButton3;
/* prettier-ignore-end */
