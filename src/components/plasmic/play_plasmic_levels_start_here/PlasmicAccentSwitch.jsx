// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fiUhXe8Zsj5ebqGZX94BP2
// Component: BS2hJkXU4ZpCvL
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_play_plasmic_levels_start_here.module.css"; // plasmic-import: fiUhXe8Zsj5ebqGZX94BP2/projectcss
import * as sty from "./PlasmicAccentSwitch.module.css"; // plasmic-import: BS2hJkXU4ZpCvL/css

export const PlasmicAccentSwitch__VariantProps = new Array();

export const PlasmicAccentSwitch__ArgProps = new Array();

function PlasmicAccentSwitch__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAccentSwitch__ArgProps,
      internalVariantPropNames: PlasmicAccentSwitch__VariantProps
    });

    return PlasmicAccentSwitch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccentSwitch";
  } else {
    func.displayName = `PlasmicAccentSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicAccentSwitch = Object.assign(
  // Top-level PlasmicAccentSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    // Metadata about props expected for PlasmicAccentSwitch
    internalVariantProps: PlasmicAccentSwitch__VariantProps,
    internalArgProps: PlasmicAccentSwitch__ArgProps
  }
);

export default PlasmicAccentSwitch;
/* prettier-ignore-end */